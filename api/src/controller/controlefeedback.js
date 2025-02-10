const con = require('../connect/banco');
const express = require('express');

const create = (req, res) => {
    const { nome, email, feedback } = req.body;

    let query = `INSERT INTO feedbacks (nome, email, feedback, data) VALUES`;
    query += `('${nome}', '${email}', '${feedback}', CURDATE())`;  // Adicionando a data atual com CURDATE()
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(201).json(result);
        }
    });
};

const read = (req, res) => {
    con.query('SELECT * FROM feedbacks', (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(result); 
        }
    });
};

const deleteFeedback = (req, res) => {
    const { id } = req.params;

    let query = `DELETE FROM feedbacks WHERE feedback_id = ${id}`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else if (result.affectedRows === 0) {
            res.status(404).json({ message: 'Feedback não encontrado' });
        } else {
            res.status(200).json({ message: 'Feedback deletado com sucesso' });
        }
    });
};

module.exports = {
    create,
    read,
    deleteFeedback
};
package com.trabalho.inteligencia.computacional.A1ProjetoInteligenciaComputacional.controller;

import com.trabalho.inteligencia.computacional.A1ProjetoInteligenciaComputacional.perguntas.Entity.Question;
import com.trabalho.inteligencia.computacional.A1ProjetoInteligenciaComputacional.perguntas.Repository.QuestionsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/questions")
public class QuestionsController {

    @Autowired
    QuestionsRepository questionRepository;

    @GetMapping
    public List<Question> getQuestions(){
        return questionRepository.findAll();
    }

    @GetMapping(value = "/question/{id}")
    public Optional<Question> getQuestion(@PathVariable int id){
        return questionRepository.findById(id);
    }
}

package com.trabalho.inteligencia.computacional.A1ProjetoInteligenciaComputacional.controller;

import com.trabalho.inteligencia.computacional.A1ProjetoInteligenciaComputacional.perguntas.Entity.Fruta;
import com.trabalho.inteligencia.computacional.A1ProjetoInteligenciaComputacional.perguntas.Repository.FrutaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/frutas")
public class frutasController {

    @Autowired
    FrutaRepository frutaRepository;

    @GetMapping
    public Iterable<Fruta> getFrutas(){
        return frutaRepository.findAll();
    }

    @GetMapping("/fruta/{id}")
    public Optional<Fruta> getFruta(@PathVariable int id){
        return frutaRepository.findById(id);
    }
}

package com.trabalho.inteligencia.computacional.A1ProjetoInteligenciaComputacional.controller;

import com.trabalho.inteligencia.computacional.A1ProjetoInteligenciaComputacional.perguntas.Entity.Animal;
import com.trabalho.inteligencia.computacional.A1ProjetoInteligenciaComputacional.perguntas.Repository.AnimalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/animais")
public class animaisController {

    @Autowired
    AnimalRepository animalRepository;

    @GetMapping
    public Iterable<Animal> getAnimais(){
          return animalRepository.findAll();
    }

    @GetMapping("/animal/{id}")
    public Optional<Animal> getAnimal(@PathVariable int id){
        return animalRepository.findById(id);
    }
}

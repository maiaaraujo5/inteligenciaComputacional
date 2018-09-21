package com.trabalho.inteligencia.computacional.A1ProjetoInteligenciaComputacional.perguntas.Repository;

import com.trabalho.inteligencia.computacional.A1ProjetoInteligenciaComputacional.perguntas.Entity.Animal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AnimalRepository extends JpaRepository<Animal, Integer> {
    List<Animal> findAll();

    @Override
    Optional<Animal> findById(Integer id);
}

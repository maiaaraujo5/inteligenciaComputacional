package com.trabalho.inteligencia.computacional.A1ProjetoInteligenciaComputacional.perguntas.Repository;

import com.trabalho.inteligencia.computacional.A1ProjetoInteligenciaComputacional.perguntas.Entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface QuestionsRepository extends JpaRepository<Question, Integer> {
    List<Question> findAll();

    @Override
    Optional<Question> findById(Integer id);
}

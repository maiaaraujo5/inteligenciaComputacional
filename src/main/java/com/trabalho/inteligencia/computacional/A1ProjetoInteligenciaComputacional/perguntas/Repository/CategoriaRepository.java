package com.trabalho.inteligencia.computacional.A1ProjetoInteligenciaComputacional.perguntas.Repository;

import com.trabalho.inteligencia.computacional.A1ProjetoInteligenciaComputacional.perguntas.Entity.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CategoriaRepository extends JpaRepository<Categoria, Integer> {

    List<Categoria> findAll();

    Optional<Categoria> findById(Integer integer);

    Optional<Categoria> findByName(String name);
}

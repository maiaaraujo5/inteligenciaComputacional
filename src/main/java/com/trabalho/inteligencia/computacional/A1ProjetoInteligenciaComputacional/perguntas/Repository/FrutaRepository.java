package com.trabalho.inteligencia.computacional.A1ProjetoInteligenciaComputacional.perguntas.Repository;

import com.trabalho.inteligencia.computacional.A1ProjetoInteligenciaComputacional.perguntas.Entity.Fruta;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface FrutaRepository extends JpaRepository<Fruta, Integer> {
    List<Fruta> findAll();

    @Override
    Optional<Fruta> findById(Integer id);
}

package com.trabalho.inteligencia.computacional.A1ProjetoInteligenciaComputacional.perguntas.Repository;

import com.trabalho.inteligencia.computacional.A1ProjetoInteligenciaComputacional.perguntas.Entity.Resposta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RespostasRepository extends JpaRepository<Resposta, Integer> {
    public List<Resposta> findAll();

    @Override
    Optional<Resposta> findById(Integer integer);

    Optional<Resposta> findByPerguntaPaiAndResposta(Integer perguntaPai, boolean resposta);
}

package com.trabalho.inteligencia.computacional.A1ProjetoInteligenciaComputacional.perguntas.Entity;

import org.springframework.lang.Nullable;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
public class Resposta {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;

    @NotNull
    private boolean resposta;

    @Nullable
    @ManyToOne
    @JoinColumn(name = "pergunta_pai")
    private Question perguntaPai;

    @Nullable
    @ManyToOne
    @JoinColumn(name = "pergunta_filha")
    private Question PerguntaFilha;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public boolean isResposta() {
        return resposta;
    }

    public void setResposta(boolean resposta) {
        this.resposta = resposta;
    }

    @Nullable
    public Question getPerguntaPai() {
        return perguntaPai;
    }

    public void setPerguntaPai(@Nullable Question perguntaPai) {
        this.perguntaPai = perguntaPai;
    }

    @Nullable
    public Question getPerguntaFilha() {
        return PerguntaFilha;
    }

    public void setPerguntaFilha(@Nullable Question perguntaFilha) {
        PerguntaFilha = perguntaFilha;
    }
}

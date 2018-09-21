package com.trabalho.inteligencia.computacional.A1ProjetoInteligenciaComputacional.perguntas.Entity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
public class Fruta {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;

    @NotNull
    private String nomeFruta;

    @ManyToOne
    @JoinColumn(name = "categoria_id")
    private Categoria categoriaId;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNomeFruta() {
        return nomeFruta;
    }

    public void setNomeFruta(String nomeFruta) {
        this.nomeFruta = nomeFruta;
    }

    public Categoria getCategoriaId() {
        return categoriaId;
    }

    public void setCategoriaId(Categoria categoriaId) {
        this.categoriaId = categoriaId;
    }
}

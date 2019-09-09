const base =
{
    pergunta: 'Ser Vivo?',
    sim: {
        pergunta: 'Doméstico?',
        sim: {
            pergunta: 'Mamífero?',
            sim: {
                pergunta: 'Costuma estar em casas?',
                sim: {
                    pergunta: 'Roedor?',
                    sim: {
                        resultado: 'Hamster'
                    },
                    nao: {
                        pergunta: 'felino?',
                        sim: {
                            resultado: 'Gato'
                        },
                        nao: {
                            resultado: 'Cachorro'
                        }
                    }
                },
                nao: {
                    pergunta: 'Produz leite?',
                    sim: {
                        resultado: 'Vaca'
                    },
                    nao: {
                        pergunta: 'Costuma rolar na lama?',
                        sim: {
                            resultado: 'Porco'
                        },
                        nao: {
                            resultado: 'Cavalo'
                        }
                    }
                }
            },
            nao: {
                pergunta: 'Tagarela?',
                sim: {
                    resultado: 'Papagaio'
                },
                nao: {
                    resultado: 'Galinha'
                }
            }
        },
        nao: {
            pergunta: 'Mamifero?',
            sim: {
                pergunta: 'Aquático?',
                sim: {
                    pergunta: 'Pode ser gigante?',
                    sim: {
                        resultado: 'Baleia'
                    },
                    nao: {
                        resultado: 'Golfinho'
                    }
                },
                nao: {
                    pergunta: 'Proveniente da savana?',
                    sim: {
                        pergunta: 'Pode ter mais de 2m?',
                        sim: {
                            pergunta: 'pescoço é longo?',
                            sim: {
                                resultado: 'Girafa'
                            },
                            nao: {
                                resultado: 'Elefante'
                            }
                        },
                        nao: {
                            pergunta: 'Felino?',
                            sim: {
                                resultado: 'Leão'
                            },
                            nao: {
                                resultado: 'Hopopótamo'
                            }
                        }
                    },
                    nao: {
                        pergunta: 'Caçador?',
                        sim: {
                            pergunta: 'felino?',
                            sim: {
                                resultado: 'Onça pintada'
                            },
                            nao: {
                                pergunta: 'Pode andar em matilha?',
                                sim: {
                                    resultado: 'Lobo'
                                },
                                nao: {
                                    resultado: 'Urso'
                                }
                            }
                        },
                        nao: {
                            pergunta: 'voa?',
                            sim: {
                                resultado: 'Morcego'
                            },
                            nao: {
                                resultado: 'Chipanzé'
                            }
                        }
                    }
                }
            },
            nao: {
                pergunta: 'Ave?',
                sim: {
                    pergunta: 'Vive no frio?',
                    sim: {
                        resultado: 'Pinguim'
                    },
                    nao: {
                        pergunta: 'Habitos noturnos?',
                        sim: {
                            resultado: 'Coruja'
                        },
                        nao: {
                            resultado: 'Águia'
                        }
                    }
                },
                nao: {
                    pergunta: 'Réptil?',
                    sim: {
                        pergunta: 'Rasteja?',
                        sim: {
                            resultado: 'Cobra'
                        },
                        nao: {
                            resultado: 'Jacaré'
                        }
                    },
                    nao: {
                        pergunta: 'Anfíbio?',
                        sim: {
                            resultado: 'Sapo'
                        },
                        nao: {
                            pergunta: 'Peixe?',
                            sim: {
                                pergunta: 'Água salgada?',
                                sim: {
                                    resultado: 'Tubarão'
                                },
                                nao: {
                                    resultado: 'Bagre'
                                }
                            },
                            nao: {
                                pergunta: '6 patas?',
                                sim: {
                                    pergunta: 'É pintado?',
                                    sim: {
                                        resultado: 'Joaninha'
                                    },
                                    nao: {
                                        resultado: 'Formiga'
                                    }
                                },
                                nao: {
                                    resultado: 'Aranha'
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    nao: {
        pergunta: 'É Escolar?',
        sim: {
            pergunta: 'Doméstico?'
        },
        nao: {
            pergunta: 'É Escolar?'
        }
    }
};

localStorage.setItem('base-conhecimento', JSON.stringify(base));
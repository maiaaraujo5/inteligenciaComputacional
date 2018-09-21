package com.trabalho.inteligencia.computacional.A1ProjetoInteligenciaComputacional.Configure;

import org.flywaydb.core.Flyway;
import org.springframework.context.annotation.Bean;

public class FlywayConfigure {

    @Bean(initMethod = "migrate")
    public Flyway flyway() {
        Flyway flyway = new Flyway();
       // flyway.setDataSource(actualDataSource());
        flyway.setBaselineOnMigrate(true);
        flyway.setLocations(
                String.format(
                        "../../resources/db/migration"
                )

        );
        return flyway;
    }
}

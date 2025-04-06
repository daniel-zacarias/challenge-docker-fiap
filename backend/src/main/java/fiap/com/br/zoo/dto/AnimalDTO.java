package fiap.com.br.zoo.dto;

import lombok.Data;
import lombok.Setter;

import java.time.LocalDate;

@Setter
@Data
public class AnimalDTO {
    private Long id;
    private String name;
    private String species;
    private LocalDate birthDate;
    private LocalDate createdAt;

}
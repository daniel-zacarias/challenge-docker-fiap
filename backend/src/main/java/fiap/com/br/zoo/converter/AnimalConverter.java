package fiap.com.br.zoo.converter;

import fiap.com.br.zoo.dto.AnimalDTO;
import fiap.com.br.zoo.model.Animal;

public class AnimalConverter {

    public static AnimalDTO toDTO(Animal animal) {
        if (animal == null) {
            return null;
        }

        AnimalDTO dto = new AnimalDTO();
        dto.setId(animal.getId());
        dto.setName(animal.getName());
        dto.setSpecies(animal.getSpecies());
        dto.setBirthDate(animal.getBirthDate());
        dto.setCreatedAt(animal.getCreatedAt());
        return dto;
    }
}
package fiap.com.br.zoo.service;

import fiap.com.br.zoo.converter.AnimalConverter;
import fiap.com.br.zoo.dto.AnimalDTO;
import fiap.com.br.zoo.model.Animal;
import fiap.com.br.zoo.repository.AnimalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnimalService {

    @Autowired
    private AnimalRepository animalRepository;

    public List<AnimalDTO> findAllAnimal(){
        List<Animal> animals = animalRepository.findAll();
        return animals.stream().map(AnimalConverter::toDTO).toList();
    }

}

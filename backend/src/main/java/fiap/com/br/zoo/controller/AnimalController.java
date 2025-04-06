package fiap.com.br.zoo.controller;

import fiap.com.br.zoo.dto.AnimalDTO;
import fiap.com.br.zoo.service.AnimalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/animals")
public class AnimalController {

    @Autowired
    private AnimalService service;

    @GetMapping()
    public ResponseEntity<List<AnimalDTO>> getAnimals(){
        List<AnimalDTO> animalDTOList = service.findAllAnimal();
        return ResponseEntity.ok(animalDTOList);
    }

}

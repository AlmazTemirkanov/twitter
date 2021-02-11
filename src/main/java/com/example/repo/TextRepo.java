package com.example.repo;

import com.example.domain.Text;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TextRepo extends CrudRepository<Text, String> {
    List <Text>findBytextIgnoreCaseContaining(String text);
}

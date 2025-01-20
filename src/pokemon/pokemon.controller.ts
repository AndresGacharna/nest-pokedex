import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';

import { ParseMongoidPipe } from 'src/common/pipes/parse-mongoid/parse-mongoid.pipe';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Post()
  //@HttpCode(200) //Esto sirve para personalizar los codigos de respuesta al cliente
  //@HttpCode(HttpStatus.UNAUTHORIZED)
  create(@Body() createPokemonDto: CreatePokemonDto) {
    return this.pokemonService.create(createPokemonDto);
  }

  @Get()
  findAll(@Query() paginationDto:PaginationDto) {
    return this.pokemonService.findAll(paginationDto);
  }

  @Get(':term') //Semanticamente es un termino de busqueda. No es que siempre vaya el ID, ya que le podemos enviar el nombre del pokemon o más cosas
  findOne(@Param('term') term: string) {
    return this.pokemonService.findOne(term);
  }

  @Patch(':term')
  update(@Param('term') term: string, @Body() updatePokemonDto: UpdatePokemonDto) {
    return this.pokemonService.update(term, updatePokemonDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseMongoidPipe) id: string) {
    return this.pokemonService.remove(id);
  }
}

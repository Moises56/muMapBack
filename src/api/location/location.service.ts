import { Injectable } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class LocationService {
  constructor(private prisma: PrismaService) {}
  async create(createLocationDto: CreateLocationDto) {
    // crear un nuevo registro en la base de datos
    return this.prisma.location.create({
      data: createLocationDto,
    });
  }

  findAll() {
    // get Locations All
    return this.prisma.location.findMany();
  }

  findOne(id: string) {
    // get Locations by Id
    return this.prisma.location.findUnique({
      where: { id },
    });
  }

  update(id: string, updateLocationDto: UpdateLocationDto) {
    // Actualizar un registro en la base de datos
    return this.prisma.location.update({
      where: { id },
      data: updateLocationDto,
    });
  }

  remove(id: string) {
    // Eliminar un registro en la base de datos
    return this.prisma.location.delete({
      where: { id },
    });
  }
}

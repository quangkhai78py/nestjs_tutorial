import { Body, Controller, Post } from '@nestjs/common';
import { InitService } from './init.service';
import { InitDto } from './dto/init.dto';


@Controller('inits')
class InitController {
  constructor(protected initService: InitService) {}

  @Post('planets')
  planets(@Body() initDto: InitDto): Promise<any> {
    return this.initService.initializePlanetGameData(initDto);
  }
}

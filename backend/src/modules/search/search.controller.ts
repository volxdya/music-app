import { Controller, Get, Param } from '@nestjs/common';
import { SearchService } from './search.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Search')
@Controller('')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @ApiOperation({summary: 'Поиск по значению, которое приходит с фронтенда'})
  @Get(`/search/:value`)
  search(@Param('value') value: string) {
    return this.searchService.search(value);
  }
}

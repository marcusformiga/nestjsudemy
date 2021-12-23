import { ArgumentMetadata, PipeTransform } from "@nestjs/common";

export class PlayersValidatorPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
      console.log(`Value: ${value} metadata: ${metadata.type}`)
      return value
  }
}

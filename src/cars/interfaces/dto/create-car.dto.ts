import { IsString, IsNumber } from "class-validator";

export class CreateCarDto {

  @IsString()
  readonly brand: string;

  @IsString()
  readonly color: string;

  @IsString()
  readonly model: string;

  @IsNumber()
  readonly price: number;
}

import { IsNumber, IsOptional } from "class-validator";

export class CoordsDto {
    
    @IsOptional()
    @IsNumber()
    accuracy? : number;
    
    @IsOptional()
    @IsNumber()
    altitude? : number;
    
    @IsOptional()
    @IsNumber()
    altitudeAccuracy? : number;
    
    @IsOptional()
    @IsNumber()
    heading? : number;

    @IsOptional()
    @IsNumber()
    latitude? : number;

    @IsOptional()
    @IsNumber()
    longitude? : number;
    
    @IsOptional()
    @IsNumber()
    speed? : number;
}
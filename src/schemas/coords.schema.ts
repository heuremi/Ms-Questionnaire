import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Coords {
    
    @Prop({ type: Number })
    accuracy? : number;
    
    @Prop({ type: Number })
    altitude? : number;
    
    @Prop({ type: Number })
    altitudeAccuracy? : number;
    
    @Prop({ type: Number })
    heading? : number;

    @Prop({ type: Number })
    latitude? : number;

    @Prop({ type: Number })
    longitude? : number;
    
    @Prop({ type: Number })
    speed? : number;
}

export const CoordsSchema = SchemaFactory.createForClass(Coords);

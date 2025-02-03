import { ApiProperty } from "@nestjs/swagger";
import { IsString, Matches,length,IsNotEmpty, Length } from "class-validator";

export class RegisterUserDTO {

    @ApiProperty({
        description: 'username',
        type: String,
        example: 'M.FIKRI HAIKAL AYATULLAH'
    })

    @IsString()
    @IsNotEmpty()   
    @Matches(/^\S*$/i)
    @Length(3, 100)
    username: string;

    @ApiProperty({
        description: 'password',
        type: String,
        example: 'password123'
    })

    @IsString()
    @IsNotEmpty()
    @Matches(/^\S*$/i)
    @Length(3, 100)
    pasword: string;
}

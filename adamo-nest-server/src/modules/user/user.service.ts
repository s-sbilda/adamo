import { Injectable } from '@nestjs/common';
import { FindConditions, QueryRunner, SelectQueryBuilder, UpdateResult, DeleteResult } from 'typeorm';
import { UserEntity } from './user.entity';
import { UserRegisterDto } from '../auth/dto/UserRegisterDto';
import { UserRepository } from './user.repository';
import { IFile } from '../../interfaces/IFile';
import { ValidatorService } from '../../shared/services/validator.service';
import { FileNotImageException } from '../../exceptions/file-not-image.exception';
import { AwsS3Service } from '../../shared/services/aws-s3.service';
import { User } from 'aws-sdk/clients/appstream';

@Injectable()
export class UserService {
    constructor(
        public readonly userRepository: UserRepository,
        public readonly validatorService: ValidatorService,
        public readonly awsS3Service: AwsS3Service,
    ) {}

    /**
     * Find single user
     */
    findUser(findData: FindConditions<UserEntity>): Promise<UserEntity> {
        return this.userRepository.findOne(findData);
    }

    async list(): Promise<UserEntity[]>{
        return await this.userRepository.find();
    }
    async findAll(): Promise<UserEntity[]> {
        return await this.userRepository.find();
    }

    async create(user: UserEntity): Promise<UserEntity> {
        return await this.userRepository.save(user);
    }

    async update(user: UserEntity): Promise<UpdateResult> {
        return await this.userRepository.update(user.id, user);
    }
    async delete(id): Promise<DeleteResult> {
        return await this.userRepository.delete(id);
    }

    /**
     * Find all users
     */
    findUsers(findData: FindConditions<UserEntity>): Promise<UserEntity[]> {
        return this.userRepository.find(findData);
    }

    createQueryBuilder(alias: string = 'user', queryRunner?: QueryRunner): SelectQueryBuilder<UserEntity> {
        return this.userRepository.createQueryBuilder(alias, queryRunner);
    }

    async findByUsernameOrEmail(options: Partial<{ username: string, email: string }>): Promise<UserEntity | undefined> {
        let queryBuilder = this.userRepository.createQueryBuilder('user');

        if (options.email) {
            queryBuilder = queryBuilder.orWhere('user.email = :email', { email: options.email });
        }
        if (options.username) {
            queryBuilder = queryBuilder.orWhere('user.username = :username', { username: options.username });
        }

        return queryBuilder.getOne();
    }

    async createUser(userRegisterDto: UserRegisterDto, file: IFile): Promise<UserEntity> {
        let avatar: string;
        if (file && !this.validatorService.isImage(file.mimetype)) {
            throw new FileNotImageException();
        }

        if (file) {
            avatar = await this.awsS3Service.uploadImage(file);
        }

        // const user = this.userRepository.create({ ...userRegisterDto, avatar });
        const user = this.userRepository.create( userRegisterDto );

        return this.userRepository.save(user);

    }
}

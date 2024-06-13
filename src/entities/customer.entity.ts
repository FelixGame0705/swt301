import { BaseEntity, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { AccountsEntity } from "./accounts.entity";
import { OrderEntity } from "./order.entity";
@Entity('Customer')
export class CustomerEntity extends BaseEntity{
    @PrimaryColumn()
    CustomerID: number
    @Column({nullable: true, type: Date})
    Birthday: Date
    @Column({nullable:true})
    Gender: boolean
    @Column({nullable: true})
    Address: string
    @OneToOne(()=>AccountsEntity, account=>account.customer)
    //@JoinColumn({name:'CustomerID', referencedColumnName:'AccountID'})
    account:AccountsEntity
    @OneToMany(()=>OrderEntity, order=>order.customer)
    order: OrderEntity[]
    //done
}
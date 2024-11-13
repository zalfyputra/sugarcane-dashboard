import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('kebun_tebu')
export class KebunTebu {
  @PrimaryGeneratedColumn()
  id_kebun: number;

  @Column({ length: 100 })
  lokasi: string;

  @Column('numeric', { precision: 10, scale: 2 })
  luas_hektar: number;

  @Column({ length: 50, nullable: true })
  jenis_tanah: string;

  @Column({ type: 'int', nullable: true })
  jumlah_tenaga_kerja: number;

  @Column('numeric', { precision: 10, scale: 2, nullable: true })
  produksi_ton: number;

  @Column({ length: 50, nullable: true })
  jenis_tebu: string;

  @Column({ type: 'date', nullable: true })
  tanggal_tanam: Date;

  @Column({ type: 'date', nullable: true })
  tanggal_panen: Date;

  @Column({ length: 50, nullable: true })
  kondisi_tanaman: string;

  @Column({ length: 50, nullable: true })
  metode_irigasi: string;

  @Column({ type: 'boolean', nullable: true })
  penggunaan_pupuk: boolean;

  @Column('numeric', { precision: 10, scale: 2, nullable: true })
  jumlah_pupuk_kg: number;

  @Column('numeric', { precision: 5, scale: 2, nullable: true })
  kelembaban_tanah: number;

  @Column('numeric', { precision: 5, scale: 2, nullable: true })
  ketinggian_meter: number;

  @Column('numeric', { precision: 4, scale: 2, nullable: true })
  suhu_rata_rata: number;
}

export interface IService {
  id: number;                     // Уникальный идентификатор
  owner_id: number;               // Владелец автомобиля (ID пользователя)
  brand: string;                  // Марка автомобиля
  model: string;                  // Модель автомобиля
  year: number;                   // Год выпуска
  price: number;                  // Цена автомобиля
  mileage?: number;               // Пробег в километрах (опционально)
  body_type?: string;             // Тип кузова (седан, хэтчбек и т.д.)
  engine_type?: string;           // Тип двигателя (бензин, дизель и т.д.)
  engine_capacity?: number;       // Объем двигателя в литрах
  transmission?: string;          // Тип трансмиссии (механика, автомат)
  drivetrain?: string;            // Привод (передний, задний, полный)
  color?: string;                 // Цвет автомобиля
  condition?: string;             // Состояние (новый, б/у)
  number_of_doors?: number;       // Количество дверей
  seating_capacity?: number;      // Количество мест
  fuel_efficiency?: number;       // Расход топлива (л/100 км)
  features?: string[];            // Дополнительные характеристики
  description?: string;           // Описание автомобиля
  images?: string[];              // Фотографии автомобиля
  location?: string;              
  created_at?: string;            
  updated_at?: string;            
}

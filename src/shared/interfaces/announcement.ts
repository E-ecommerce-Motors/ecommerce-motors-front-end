export interface Create {
    title: string;
    year: string;
    mileage: number;
    price: number;
    description: string;
    typeAnnouncement: string;
    typeVehicle: string;
    userId: number;
    announcementImgs: IAnnouncementImages[]
    
  }
  export interface IAnnouncementImages{
    create: ICreateImg[];
  }

  export interface ICreateImg{
    coverImage: string;
  }


import { DetailedAnnouncementContent } from "./style";

interface IDetailedAnnouncement {
  nameCar: string;
}

const DetailedAnnouncement: React.FC<IDetailedAnnouncement> = ({ nameCar }) => {
  return (
    <DetailedAnnouncementContent>
      <div className="carStats">
        <div className="carImage radius">
          <img
            src="https://s2.glbimg.com/QakFcCb0IEBZsgIm6ZZjOeCWfCc=/0x0:620x400/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/Z/y/RlzMBDQYi1GBBV2AAzZw/2016-07-25-chevrolet-onix-prisma-autoesporte-30-1.jpg"
            alt={nameCar}
          />
        </div>
        <div className="carModel radius">
          <h2>{nameCar}</h2>
        </div>
        <div className="carDescription radius">
          <p>
            Espaço interno amplo Porta-malas generoso Motorização eficiente
            Baixo custo de manutenção Confiança Substituído pelo Chevrolet Onix
            Plus em 2020.
          </p>
        </div>
      </div>

      <div></div>
    </DetailedAnnouncementContent>
  );
};

export default DetailedAnnouncement;

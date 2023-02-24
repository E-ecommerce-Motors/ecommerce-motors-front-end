import { DetailedAnnouncementContent } from "./style";

interface IDetailedAnnouncement {
  nameCar: string;
}

const DetailedAnnouncement: React.FC<IDetailedAnnouncement> = ({ nameCar }) => {
  return (
    <DetailedAnnouncementContent>
      <div className="purple"></div>
      <div></div>
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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
            unde ut quis, deleniti eaque, sunt repudiandae maxime provident,
            praesentium sapiente porro cumque nobis ab deserunt? Officiis aut
            adipisci maiores libero. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Exercitationem quae esse vel, libero iure dolorum.
            Natus aut vitae quibusdam magni quisquam quae at, iste perferendis,
            excepturi eum, consectetur assumenda optio? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Nam, dignissimos? Sed quisquam,
            fuga ipsum doloremque ducimus dignissimos minus ea molestias rerum
            libero aliquam autem cupiditate possimus, ipsa maxime impedit
            magnam?
          </p>
        </div>
      </div>

      <div></div>
    </DetailedAnnouncementContent>
  );
};

export default DetailedAnnouncement;

import More from './../../../img/more.jpg';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>

      <div>
        <img className={s.More} src={More} />
      </div>
      <div className={ s.DescriptionBlok }>
        ava + description
      </div>

    </div>
  )
}

export default ProfileInfo; 

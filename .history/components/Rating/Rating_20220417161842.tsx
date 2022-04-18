import React, { useEffect, useState , KeyboardEvent } from 'react';
import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';
import StarIcon from './Star.svg';
import classNames from 'classnames';


function Rating({isEditable = false , rating , setRating, ...props}: RatingProps): JSX.Element {

  const [ratingArray, setRatingArray ] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  useEffect(()=>{
    constructRating(rating);
  },[rating]);

  const constructRating = (currentRating: number) => {
    const updateArray = ratingArray.map((r: JSX.Element , i: number) => {
      return(
        <span
        key={i} className={classNames(styles.star,{
          [styles.filled]: i < currentRating ,
          [styles.editable]: isEditable 
        })}
        onMouseLeave={() => changeDispaly(rating)}
        onMouseEnter={() => changeDispaly(i + 1)}
        onClick={() => onclick(i+1)}
        >
          <StarIcon
        tabIndex={isEditable ? 0 : -1}
        onKeyDown={(e: KeyboardEvent<SVGAElement>) => isEditable && handleSpace(i + 1 ,e)}
        />
        </span>
        
      );
    });
    setRatingArray(updateArray);
  };

  const changeDispaly = (i: number) => {
    if(!isEditable){
      return;
    }
    constructRating(i);
  }

  const onclick = (i: number) => {
    if(!isEditable || !setRating ){
      return;
    }
    setRating(i);
  }

  const handleSpace = (i: number , e: KeyboardEvent<SVGAElement>) =>{
    if(e.code != 'Space' || !setRating){
      return;
    }
    setRating(i);
  }

  return (
    <div {...props}>
      {ratingArray.map((r,i) => (<span key={i}>{r}</span>))}
    </div>
  )
}

export default Rating;
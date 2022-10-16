import style from './Statistics.module.css';

export const Statistics = ({title= null, stats})=>{
const statisticsRender = stats.map((stat) =>{
   return (
      <li style={{backgroundColor:'#'+ Math.floor(Math.random() * 16777215).toString(16),color:'white' }}
      key={stat.id} className={style.item}>
        <span className={style.label}>{stat.label}</span>
        <span className={style.percentage}>{stat.percentage}%</span>
      </li>
   );
});
return (
   <section className={style.statistics}>
     {title && <h2 className={style.title}>{title}</h2>}
     <ul className={style.list}>{statisticsRender}</ul>
   </section>
 );
};
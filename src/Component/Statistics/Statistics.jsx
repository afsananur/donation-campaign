
import { PieChart, Pie,  Cell} from 'recharts';


const Statistics = () => {
    
   
   
    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
      }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text
            x={x}
            y={y}
            fill="white"
            textAnchor="middle"
            dominantBaseline="central"
          >
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        );
      };
      
    
    return (
        <div>
           <PieChart width={400} height={400}>
          <Pie
            >
          </Pie>
        </PieChart>
        </div>
    );
};

export default Statistics;
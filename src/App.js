import './App.css';
import { MapContainer, TileLayer, Polygon} from 'react-leaflet'
import {useMemo} from 'react'

function App() {

const offline = './tiles/{z}/{x}/{y}.png';
const polygon = [
  [65.094833, -139.965319],
  [64.496194, -4.297572],
  [0.7835, -5.000514],
  [0.720924,-140.107921]];

const polygon2 = [[50.983262, 33.024328],
[51.294196, 131.911982],
[-7.780021, 131.822991],
[-7.696646,33.574814]];

const polygon3 = [
  [-31.793566, -89.561647],
  [-31.799061, 85.682888],
  [-70.253341, 85.770366],
  [-70.309774,-89.59562]
];

const onChange = ()=>{
  console.log('region1');
}
const onChange2 = ()=>{
  console.log('region2');
}
const onChange3 = ()=>{
  console.log('region3');
}

const handlers = useMemo(() => ({ click: onChange}), []);
const handlers2 = useMemo(() => ({ click: onChange2}), []);
const handlers3 = useMemo(() => ({ click: onChange3}), []);


return(
  <MapContainer center={[0,0]} zoom={0} scrollWheelZoom={true}>
      <TileLayer
    url={offline}
    noWrap = {true}
    maxZoom = {4}
    minZoom = {0}
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Polygon positions={polygon} 
      eventHandlers = {handlers}
       />
      <Polygon positions={polygon2} 
        eventHandlers = {handlers2}
      />
      <Polygon positions={polygon3} 
        eventHandlers = {handlers3}
      />

    </MapContainer>
);
}

export default App;

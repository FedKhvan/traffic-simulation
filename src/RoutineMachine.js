import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

const createRoutineMachineLayer = (props) => {

    const instance = L.Routing.control({
        waypoints: [L.latLng(54.85973, 83.08001), L.latLng(54.8706, 83.1045)],
        lineOptions: {
            styles: [{ color: "#6FA1EC", weight: 4 }]
        },
        show: false,
        addWaypoints: false,
        routeWhileDragging: true,
        draggableWaypoints: true,
        fitSelectedRoutes: true,
        showAlternatives: false

    }).on('routesfound', function(e){
        e.routes[0].coordinates.forEach(function (coord, index){
            setTimeout(() => {
                console.log(coord.lat)
                console.log(coord.lng)
            }, 100 * index)
        })
    });

    return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;

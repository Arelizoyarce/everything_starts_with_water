import { PointUnit } from "./Map_point";

export default function Point ({ position }) {
    return (
        <PointUnit position={position} scale={6}></PointUnit>
    )
}
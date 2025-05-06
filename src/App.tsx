/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  ConnectionMode,
  useEdgesState,
  type Connection,
  addEdge,
  useNodesState
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'

// Styles
import './global.css'
import colors from 'tailwindcss/colors';

// Components
import Square from './components/nodes/Square';
import DefaultEdge from './components/edges/DefaultEdge';
import { INITIAL_NODES } from './InitialNodes';

// Nodes, Edges
const NODE_TYPES = {
  square: Square
}

const EDGE_TYPES = {
  default: DefaultEdge
}


function App() {
  const [edges, setEdges, onEdgesChange] = useEdgesState([])
  const [nodes, setNodes, onNodesChange] = useNodesState(INITIAL_NODES)

  const onConnect = useCallback((connection: Connection) => {
    return setEdges(edges => addEdge(connection, edges))
  }, [])

  return (
    <div className="w-screen h-screen">
      <ReactFlow
        nodeTypes={NODE_TYPES}
        edgeTypes={EDGE_TYPES}
        nodes={nodes}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodesChange={onNodesChange}
        connectionMode={ConnectionMode.Loose}
        defaultEdgeOptions={{
          type: 'default'
        }}
      >
        <Background
          gap={20}
          size={2}
          color={colors.zinc[200]}
        />
        <Controls />
      </ReactFlow>
    </div>
  )
}

export default App

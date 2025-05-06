/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactFlow, Background, Controls, ConnectionMode, useEdgesState, type Connection, addEdge, useNodesState } from '@xyflow/react'
import './global.css'
import '@xyflow/react/dist/style.css'
import colors from 'tailwindcss/colors';
import Square from './components/nodes/Square';
import { useCallback } from 'react';
import DefaultEdge from './components/edges/DefaultEdge';

// Nodes, Edges
const NODE_TYPES = {
  square: Square
}

const EDGE_TYPES = {
  default: DefaultEdge
}

const INITIAL_NODES = [
  {
    id: crypto.randomUUID(),
    type: 'square',
    position: {
      x: 0,
      y: 0,
    },
    data: {}
  },
  {
    id: crypto.randomUUID(),
    type: 'square',
    position: {
      x: 600,
      y: 0,
    },
    data: {}
  },
  {
    id: crypto.randomUUID(),
    type: 'square',
    position: {
      x: 1200,
      y: 300,
    },
    data: {}
  },
  {
    id: crypto.randomUUID(),
    type: 'square',
    position: {
      x: 1200,
      y: -300,
    },
    data: {}
  },
  {
    id: crypto.randomUUID(),
    type: 'square',
    position: {
      x: 1800,
      y: 0,
    },
    data: {}
  }
] //satisfies Node[]


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

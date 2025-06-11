import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server, Brush, Cloud, Box, FileCode, Github } from 'lucide-react';
import { Skill } from '../types';

interface SkillBarProps {
  skill: Skill;
  index: number;
}

const iconComponents: Record<string, React.ReactNode> = {
  react: <Code className="w-5 h-5" />,
  server: <Server className="w-5 h-5" />,
  database: <Database className="w-5 h-5" />,
  brush: <Brush className="w-5 h-5" />,
  cloud: <Cloud className="w-5 h-5" />,
  box: <Box className="w-5 h-5" />,
  code: <Code className="w-5 h-5" />,
  'file-code': <FileCode className="w-5 h-5" />,
  github: <Github className="w-5 h-5" />,
};

const SkillBar: React.FC<SkillBarProps> = ({ skill, index }) => {
  return (
    <motion.div 
      className="mb-6"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <div 
            className="w-8 h-8 rounded-full flex items-center justify-center mr-3"
            style={{ backgroundColor: `${skill.color}25`, color: skill.color }}
          >
            {iconComponents[skill.icon]}
          </div>
          <h3 className="text-lg font-medium text-white">{skill.name}</h3>
        </div>
        <span className="text-gray-400">{skill.level}%</span>
      </div>
      
      <div className="h-2 w-full bg-background-light rounded-full overflow-hidden">
        <motion.div 
          className="h-full rounded-full"
          style={{ backgroundColor: skill.color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  );
};

export default SkillBar;
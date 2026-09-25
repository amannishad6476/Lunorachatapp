import React from 'react';
import { useApp } from '../../context/AppContext';
import { YouTab } from './YouTab';
import { PeopleTab } from './PeopleTab';
import { AskTab } from './AskTab';
import { BottomTabBar } from './BottomTabBar';

export const MainApp: React.FC = () => {
  const { activeTab } = useApp();

  return (
    <div className="flex-1 flex flex-col justify-between overflow-hidden bg-[#0B0B0E]">
      <div className="flex-1 flex flex-col overflow-hidden relative">
        {activeTab === 'you' && <YouTab />}
        {activeTab === 'people' && <PeopleTab />}
        {activeTab === 'ask' && <AskTab />}
      </div>
      <BottomTabBar />
    </div>
  );
};

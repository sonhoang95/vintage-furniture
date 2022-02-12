import { GlobalState } from '../context/global_context';

type GlobalActionType = 'OPEN_SIDEBAR' | 'CLOSE_SIDEBAR';

interface GlobalAction {
  type: GlobalActionType;
  payload?: any;
}

export const global_reducer = (state: GlobalState, action: GlobalAction) => {
  switch (action.type) {
    case 'OPEN_SIDEBAR':
      return { ...state, isSidebarOpen: true };
    case 'CLOSE_SIDEBAR':
      return { ...state, isSidebarOpen: false };
    default:
      throw new Error(`no matching ${action.type} action type`);
  }
};

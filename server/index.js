import server from './src/server.js';
import { PORT } from './src/config/env.js';

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

import { Router } from 'express';

const routes = Router();

// Rotas de autenticação
import automobilisticRoutes from '../modules/automobilistic/routes';
routes.use('/auth', automobilisticRoutes);

// Rotas de módulos específicos
import barbershopRoutes from '../modules/barbershop/routes';
routes.use('/barbershops', barbershopRoutes);

import restaurantRoutes from '../modules/restaurant/routes';
routes.use('/restaurants', restaurantRoutes);

// Adicione outras rotas de módulos conforme necessário

export default routes;
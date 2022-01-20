import axios from 'axios';
import { NextFunction, Request, Response } from 'express';

export class GameController {
  private choiceId: number;

  constructor() {}

  public choices = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { data } = await axios.get('https://codechallenge.boohma.com/choices');
      
      res.json(data);
    } catch  (err) {
      next(err);
    }
  };

  public choice = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { data } = await axios.get('https://codechallenge.boohma.com/choice');

      res.json(data);
    } catch  (err) {
      next(err);
    }
  };

  public play = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { player } = req.body;
      const { data } = await axios.post('https://codechallenge.boohma.com/play', { player });

      res.json(data);
    } catch  (err) {
      next(err);
    }
  };
}

export const gameController = new GameController();

/**
 * This file was auto-generated by Fern from our API Definition.
 */
import { FernApi } from '../../../..'
import express from 'express'
import * as serializers from '../../../../serialization'
export interface ImdbServiceMethods {
  createMovie(
    req: express.Request<
      never,
      FernApi.MovieId,
      FernApi.CreateMovieRequest,
      never
    >,
    res: {
      send: (responseBody: FernApi.MovieId) => Promise<void>
      cookie: (
        cookie: string,
        value: string,
        options?: express.CookieOptions
      ) => void
      locals: any
    }
  ): void | Promise<void>
  getMovie(
    req: express.Request<
      {
        movieId: serializers.MovieId.Raw
      },
      FernApi.Movie,
      never,
      never
    >,
    res: {
      send: (responseBody: FernApi.Movie) => Promise<void>
      cookie: (
        cookie: string,
        value: string,
        options?: express.CookieOptions
      ) => void
      locals: any
    }
  ): void | Promise<void>
}
export declare class ImdbService {
  private readonly methods
  private router
  constructor(
    methods: ImdbServiceMethods,
    middleware?: express.RequestHandler[]
  )
  addMiddleware(handler: express.RequestHandler): this
  toRouter(): express.Router
}
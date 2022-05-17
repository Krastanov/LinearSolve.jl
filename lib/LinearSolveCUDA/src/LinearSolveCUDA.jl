module LinearSolveCUDA

using CUDA, LinearAlgebra, LinearSolve, SciMLBase

struct CudaOffloadFactorization <: LinearSolve.AbstractFactorization end

function SciMLBase.solve(cache::LinearCache, alg::CudaOffloadFactorization; kwargs...)
    if cache.isfresh
        fact = do_factorization(alg, CUDA.CuArray(cache.A), cache.b, cache.u)
        cache = set_cacheval(cache, fact)
    end

    copyto!(cache.u, cache.b)
    y = Array(ldiv!(cache.cacheval, CUDA.CuArray(cache.u)))
    SciMLBase.build_linear_solution(alg, y, nothing, cache)
end

function do_factorization(alg::CudaOffloadFactorization, A, b, u)
    A isa Union{AbstractMatrix,AbstractDiffEqOperator} ||
        error("LU is not defined for $(typeof(A))")

    if A isa AbstractDiffEqOperator
        A = A.A
    end
    fact = qr(CUDA.CuArray(A))
    return fact
end

export CudaOffloadFactorization

end
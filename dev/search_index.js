var documenterSearchIndex = {"docs":
[{"location":"basics/Preconditioners/#Preconditioners","page":"Preconditioners","title":"Preconditioners","text":"","category":"section"},{"location":"basics/Preconditioners/","page":"Preconditioners","title":"Preconditioners","text":"Many linear solvers can be accelerated by using what is known as a preconditioner, an approximation to the matrix inverse action which is cheap to evaluate. These can improve the numerical conditioning of the solver process and in turn improve the performance. LinearSolve.jl provides an interface for the definition of preconditioners which works with the wrapped packages.","category":"page"},{"location":"basics/Preconditioners/#Using-Preconditioners","page":"Preconditioners","title":"Using Preconditioners","text":"","category":"section"},{"location":"basics/Preconditioners/#Mathematical-Definition","page":"Preconditioners","title":"Mathematical Definition","text":"","category":"section"},{"location":"basics/Preconditioners/","page":"Preconditioners","title":"Preconditioners","text":"Preconditioners are specified in the keyword arguments of init or solve. The right preconditioner, Pr transforms the linear system Au = b into the form:","category":"page"},{"location":"basics/Preconditioners/","page":"Preconditioners","title":"Preconditioners","text":"AP_r^-1(Pu) = AP_r^-1y = b","category":"page"},{"location":"basics/Preconditioners/","page":"Preconditioners","title":"Preconditioners","text":"to add the solving step P_r u = y. The left preconditioner, Pl, transforms the linear system into the form:","category":"page"},{"location":"basics/Preconditioners/","page":"Preconditioners","title":"Preconditioners","text":"P_l^-1(Au - b) = 0","category":"page"},{"location":"basics/Preconditioners/","page":"Preconditioners","title":"Preconditioners","text":"A two-sided preconditioned system is of the form:","category":"page"},{"location":"basics/Preconditioners/","page":"Preconditioners","title":"Preconditioners","text":"P_l A P_r^-1 (P_r u) = P_l b","category":"page"},{"location":"basics/Preconditioners/","page":"Preconditioners","title":"Preconditioners","text":"By default, if no preconditioner is given the preconditioner is assumed to be the identity I.","category":"page"},{"location":"basics/Preconditioners/#Using-Preconditioners-2","page":"Preconditioners","title":"Using Preconditioners","text":"","category":"section"},{"location":"basics/Preconditioners/","page":"Preconditioners","title":"Preconditioners","text":"In the following, we will use the DiagonalPreconditioner to define a two-sided preconditioned system which first divides by some random numbers and then multiplies by the same values. This is commonly used in the case where if, instead of random, s is an approximation to the eigenvalues of a system.","category":"page"},{"location":"basics/Preconditioners/","page":"Preconditioners","title":"Preconditioners","text":"s = rand(n)\r\nPl = LinearSolve.DiagonalPreconditioner(s)\r\n\r\nA = rand(n,n)\r\nb = rand(n)\r\n\r\nprob = LinearProblem(A,b)\r\nsol = solve(prob,IterativeSolvers_GMRES(),Pl=Pl)","category":"page"},{"location":"basics/Preconditioners/#Pre-Defined-Preconditioners","page":"Preconditioners","title":"Pre-Defined Preconditioners","text":"","category":"section"},{"location":"basics/Preconditioners/","page":"Preconditioners","title":"Preconditioners","text":"To simplify the usage of preconditioners, LinearSolve.jl comes with many standard preconditioners written to match the required interface.","category":"page"},{"location":"basics/Preconditioners/","page":"Preconditioners","title":"Preconditioners","text":"DiagonalPreconditioner(s::Union{Number,AbstractVector}): the diagonal preconditioner, defined as a diagonal matrix Diagonal(s).\nInvDiagonalPreconditioner(s::Union{Number,AbstractVector}): the diagonal preconditioner, defined as a diagonal matrix Diagonal(1./s).\nComposePreconditioner(prec1,prec2): composes the preconditioners to apply prec1 before prec2.\nInvComposePreconditioner(prec1,prec2): only god knows what this is for.","category":"page"},{"location":"basics/Preconditioners/#Preconditioner-Interface","page":"Preconditioners","title":"Preconditioner Interface","text":"","category":"section"},{"location":"basics/Preconditioners/","page":"Preconditioners","title":"Preconditioners","text":"To define a new preconditioner you define a Julia type which satisfies the following interface:","category":"page"},{"location":"basics/Preconditioners/#General","page":"Preconditioners","title":"General","text":"","category":"section"},{"location":"basics/Preconditioners/","page":"Preconditioners","title":"Preconditioners","text":"Base.eltype(::Preconditioner)\nBase.adjoint(::Preconditioner)\nLinearAlgebra.ldiv!(::AbstractVector,::Preconditioner,::AbstractVector)","category":"page"},{"location":"basics/CachingAPI/#Caching-Interface-API-Functions","page":"Caching Interface API Functions","title":"Caching Interface API Functions","text":"","category":"section"},{"location":"basics/CachingAPI/","page":"Caching Interface API Functions","title":"Caching Interface API Functions","text":"LinearSolve.set_A\r\nLinearSolve.set_b\r\nLinearSolve.set_u\r\nLinearSolve.set_p\r\nLinearSolve.set_prec","category":"page"},{"location":"basics/CachingAPI/#LinearSolve.set_A","page":"Caching Interface API Functions","title":"LinearSolve.set_A","text":"set_A(cache, A)\n\n\n\n\n\n\n","category":"function"},{"location":"basics/CachingAPI/#LinearSolve.set_b","page":"Caching Interface API Functions","title":"LinearSolve.set_b","text":"set_b(cache, b)\n\n\n\n\n\n\n","category":"function"},{"location":"basics/CachingAPI/#LinearSolve.set_u","page":"Caching Interface API Functions","title":"LinearSolve.set_u","text":"set_u(cache, u)\n\n\n\n\n\n\n","category":"function"},{"location":"basics/CachingAPI/#LinearSolve.set_p","page":"Caching Interface API Functions","title":"LinearSolve.set_p","text":"set_p(cache, p)\n\n\n\n\n\n\n","category":"function"},{"location":"basics/CachingAPI/#LinearSolve.set_prec","page":"Caching Interface API Functions","title":"LinearSolve.set_prec","text":"set_prec(cache, Pl, Pr)\n\n\n\n\n\n\n","category":"function"},{"location":"basics/LinearProblem/#Linear-Problems","page":"Linear Problems","title":"Linear Problems","text":"","category":"section"},{"location":"basics/LinearProblem/#Mathematical-Specification-of-a-Nonlinear-Problem","page":"Linear Problems","title":"Mathematical Specification of a Nonlinear Problem","text":"","category":"section"},{"location":"basics/LinearProblem/#Concrete-LinearProblem","page":"Linear Problems","title":"Concrete LinearProblem","text":"","category":"section"},{"location":"basics/LinearProblem/","page":"Linear Problems","title":"Linear Problems","text":"To define a LinearProblem, you simply need to give the AbstractMatrix A and an AbstractVector b which defines the linear system:","category":"page"},{"location":"basics/LinearProblem/","page":"Linear Problems","title":"Linear Problems","text":"A*u = b","category":"page"},{"location":"basics/LinearProblem/#Matrix-Free-LinearProblem","page":"Linear Problems","title":"Matrix-Free LinearProblem","text":"","category":"section"},{"location":"basics/LinearProblem/","page":"Linear Problems","title":"Linear Problems","text":"For matrix-free versions, the specification of the problem is given by an operator A(u,p,t) which computes A*u, or in-place as A(du,u,p,t). These are specified via the AbstractSciMLOperator interface. For more details, see the SciMLBase Documentation.","category":"page"},{"location":"basics/LinearProblem/","page":"Linear Problems","title":"Linear Problems","text":"Note that matrix-free versions of LinearProblem definitions are not compatible with all solvers. To check a solver for compatibility, use the function xxxxx.","category":"page"},{"location":"basics/LinearProblem/#Problem-Type","page":"Linear Problems","title":"Problem Type","text":"","category":"section"},{"location":"basics/LinearProblem/#Constructors","page":"Linear Problems","title":"Constructors","text":"","category":"section"},{"location":"basics/LinearProblem/","page":"Linear Problems","title":"Linear Problems","text":"Optionally, an initial guess u₀ can be supplied which is used for iterative methods.","category":"page"},{"location":"basics/LinearProblem/","page":"Linear Problems","title":"Linear Problems","text":"LinearProblem{isinplace}(A,x,p=NullParameters();u0=nothing,kwargs...)\nLinearProblem(f::AbstractDiffEqOperator,u0,p=NullParameters();u0=nothing,kwargs...)","category":"page"},{"location":"basics/LinearProblem/","page":"Linear Problems","title":"Linear Problems","text":"isinplace optionally sets whether the function is in-place or not, i.e. whether the solvers are allowed to mutate. By default this is true for AbstractMatrix, and for AbstractSciMLOperators it matches the choice of the operator definition.","category":"page"},{"location":"basics/LinearProblem/","page":"Linear Problems","title":"Linear Problems","text":"Parameters are optional, and if not given, then a NullParameters() singleton will be used, which will throw nice errors if you try to index non-existent parameters. Any extra keyword arguments are passed on to the solvers.","category":"page"},{"location":"basics/LinearProblem/#Fields","page":"Linear Problems","title":"Fields","text":"","category":"section"},{"location":"basics/LinearProblem/","page":"Linear Problems","title":"Linear Problems","text":"A: The representation of the linear operator.\nb: The right-hand side of the linear system.\np: The parameters for the problem. Defaults to NullParameters. Currently unused.\nu0: The initial condition used by iterative solvers.\nkwargs: The keyword arguments passed on to the solvers.","category":"page"},{"location":"solvers/solvers/#nonlinearsystemsolvers","page":"Linear System Solvers","title":"Linear System Solvers","text":"","category":"section"},{"location":"solvers/solvers/","page":"Linear System Solvers","title":"Linear System Solvers","text":"solve(prob::LinearProlem,alg;kwargs)","category":"page"},{"location":"solvers/solvers/","page":"Linear System Solvers","title":"Linear System Solvers","text":"Solves for Au=b in the problem defined by prob using the algorithm alg. If no algorithm is given, a default algorithm will be chosen.","category":"page"},{"location":"solvers/solvers/","page":"Linear System Solvers","title":"Linear System Solvers","text":"This page is solely focused on the methods for nonlinear systems.","category":"page"},{"location":"solvers/solvers/#Recommended-Methods","page":"Linear System Solvers","title":"Recommended Methods","text":"","category":"section"},{"location":"solvers/solvers/","page":"Linear System Solvers","title":"Linear System Solvers","text":"The default algorithm nothing is good for choosing an algorithm that will work, but one may need to change this to receive more performance or precision. If more precision is necessary, QRFactorization() and SVDFactorization() are the best choices, with SVD being the slowest but most precise.","category":"page"},{"location":"solvers/solvers/","page":"Linear System Solvers","title":"Linear System Solvers","text":"For efficiency, RFLUFactorization is the fastest for dense LU-factorizations. For sparse LU-factorizations, KLUFactorization if there is less structure to the sparsity pattern and UMFPACKFactorization if there is more structure. Pardiso.jl's methods are also known to be very efficient sparse linear solvers.","category":"page"},{"location":"solvers/solvers/","page":"Linear System Solvers","title":"Linear System Solvers","text":"As sparse matrices get larger, iterative solvers tend to get more efficient than factorization methods if a lower tolerance of the solution is required. IterativeSolvers.jl uses a low-rank Q update in its GMRES so it tends to be faster than Krylov.jl for CPU-based arrays, but it's only compatible with CPU-based arrays whilc Krylov.jl is more general and will support accelerators like CUDA.","category":"page"},{"location":"solvers/solvers/#Full-List-of-Methods","page":"Linear System Solvers","title":"Full List of Methods","text":"","category":"section"},{"location":"solvers/solvers/#RecursiveFactorization.jl","page":"Linear System Solvers","title":"RecursiveFactorization.jl","text":"","category":"section"},{"location":"solvers/solvers/","page":"Linear System Solvers","title":"Linear System Solvers","text":"RFLUFactorization(): a fast pure Julia LU-factorization implementation using RecursiveFactorization.jl. This is by far the fastest LU-factorization implementation, usually outperforming OpenBLAS and MKL, but generally optimized only for Base Array with Float32, Float64, ComplexF32, and ComplexF64.","category":"page"},{"location":"solvers/solvers/#Base.LinearAlgebra","page":"Linear System Solvers","title":"Base.LinearAlgebra","text":"","category":"section"},{"location":"solvers/solvers/","page":"Linear System Solvers","title":"Linear System Solvers","text":"These overloads tend to work for many array types, such as CuArrays for GPU-accelerated solving, using the overloads provided by the respective packages. Given that this can be customized per-package, details given below describe a subset of important arrays (Matrix, SparseMatrixCSC, CuMatrix, etc.) ","category":"page"},{"location":"solvers/solvers/","page":"Linear System Solvers","title":"Linear System Solvers","text":"LUFactorization(pivot=LinearAlgebra.RowMaximum()): Julia's built in lu.\nOn dense matrices this uses the current BLAS implementation of the user's computer which by default is OpenBLAS but will use MKL if the user does using MKL in their system. \nOn sparse matrices this will use UMFPACK from SuiteSparse. Note that this will not cache the symbolic factorization.\nOn CuMatrix it will use a CUDA-accelerated LU from CuSolver.\nOn BandedMatrix and BlockBandedMatrix it will use a banded LU.\nQRFactorization(pivot=LinearAlgebra.NoPivot(),blocksize=16): Julia's built in qr.\nOn dense matrices this uses the current BLAS implementation of the user's computer which by default is OpenBLAS but will use MKL if the user does using MKL in their system. \nOn sparse matrices this will use SPQR from SuiteSparse\nOn CuMatrix it will use a CUDA-accelerated QR from CuSolver.\nOn BandedMatrix and BlockBandedMatrix it will use a banded QR.\nSVDFactorization(full=false,alg=LinearAlgebra.DivideAndConquer()): Julia's built in svd.\nOn dense matrices this uses the current BLAS implementation of the user's computer which by default is OpenBLAS but will use MKL if the user does using MKL in their system. \nGenericFactorization(fact_alg): Constructs a linear solver from a generic factorization algorithm fact_alg which complies with the Base.LinearAlgebra factorization API. Quoting from Base:\nIf A is upper or lower triangular (or diagonal), no factorization of A is required and the system is solved with either forward or backward substitution. For non-triangular square matrices, an LU factorization is used. For rectangular A the result is the minimum-norm least squares solution computed by a pivoted QR factorization of A and a rank estimate of A based on the R factor. When A is sparse, a similar polyalgorithm is used. For indefinite matrices, the LDLt factorization does not use pivoting during the numerical factorization and therefore the procedure can fail even for invertible matrices.","category":"page"},{"location":"solvers/solvers/#SuiteSparse.jl","page":"Linear System Solvers","title":"SuiteSparse.jl","text":"","category":"section"},{"location":"solvers/solvers/","page":"Linear System Solvers","title":"Linear System Solvers","text":"By default, the SuiteSparse.jl are implemented for efficiency by caching the symbolic factorization. I.e. if set_A is used, it is expected that the new A has the same sparsity pattern as the previous A. If this algorithm is to be used in a context where that assumption does not hold, set reuse_symbolic=false.","category":"page"},{"location":"solvers/solvers/","page":"Linear System Solvers","title":"Linear System Solvers","text":"KLUFactorization(;reuse_symbolic=true): A fast sparse LU-factorization which specializes on sparsity patterns with \"less structure\".\nUMFPACKFactorization(;reuse_symbolic=true): A fast sparse multithreaded LU-factorization which specializes on sparsity patterns that are more structured.","category":"page"},{"location":"solvers/solvers/#Pardiso.jl","page":"Linear System Solvers","title":"Pardiso.jl","text":"","category":"section"},{"location":"solvers/solvers/","page":"Linear System Solvers","title":"Linear System Solvers","text":"This package is not loaded by default. Thus in order to use this package you must first using Pardiso. The following algorithms are pre-specified:","category":"page"},{"location":"solvers/solvers/","page":"Linear System Solvers","title":"Linear System Solvers","text":"MKLPardisoFactorize(;kwargs...): A sparse factorization method.\nMKLPardisoIterate(;kwargs...): A mixed factorization+iterative method.","category":"page"},{"location":"solvers/solvers/","page":"Linear System Solvers","title":"Linear System Solvers","text":"Those algorithms are defined via:","category":"page"},{"location":"solvers/solvers/","page":"Linear System Solvers","title":"Linear System Solvers","text":"MKLPardisoFactorize(;kwargs...) = PardisoJL(;fact_phase=Pardiso.NUM_FACT,\n                                             solve_phase=Pardiso.SOLVE_ITERATIVE_REFINE,\n                                             kwargs...)\nMKLPardisoIterate(;kwargs...) = PardisoJL(;solve_phase=Pardiso.NUM_FACT_SOLVE_REFINE,\n                                           kwargs...)","category":"page"},{"location":"solvers/solvers/","page":"Linear System Solvers","title":"Linear System Solvers","text":"The full set of keyword arguments for PardisoJL are:                         ","category":"page"},{"location":"solvers/solvers/","page":"Linear System Solvers","title":"Linear System Solvers","text":"Base.@kwdef struct PardisoJL <: SciMLLinearSolveAlgorithm\n    nprocs::Union{Int, Nothing} = nothing\n    solver_type::Union{Int, Pardiso.Solver, Nothing} = nothing\n    matrix_type::Union{Int, Pardiso.MatrixType, Nothing} = nothing\n    fact_phase::Union{Int, Pardiso.Phase, Nothing} = nothing\n    solve_phase::Union{Int, Pardiso.Phase, Nothing} = nothing\n    release_phase::Union{Int, Nothing} = nothing\n    iparm::Union{Vector{Tuple{Int,Int}}, Nothing} = nothing\n    dparm::Union{Vector{Tuple{Int,Int}}, Nothing} = nothing\nend","category":"page"},{"location":"solvers/solvers/#IterativeSolvers.jl","page":"Linear System Solvers","title":"IterativeSolvers.jl","text":"","category":"section"},{"location":"solvers/solvers/","page":"Linear System Solvers","title":"Linear System Solvers","text":"IterativeSolversJL_CG(args...;kwargs...): A generic CG implementation\nIterativeSolversJL_GMRES(args...;kwargs...): A generic GMRES implementation\nIterativeSolversJL_BICGSTAB(args...;kwargs...): A generic BICGSTAB implementation\nIterativeSolversJL_MINRES(args...;kwargs...): A generic MINRES implementation","category":"page"},{"location":"solvers/solvers/","page":"Linear System Solvers","title":"Linear System Solvers","text":"The general algorithm is:","category":"page"},{"location":"solvers/solvers/","page":"Linear System Solvers","title":"Linear System Solvers","text":"IterativeSolversJL(args...;\n                   generate_iterator = IterativeSolvers.gmres_iterable!,\n                   Pl=nothing, Pr=nothing,\n                   gmres_restart=0, kwargs...)","category":"page"},{"location":"solvers/solvers/#Krylov.jl","page":"Linear System Solvers","title":"Krylov.jl","text":"","category":"section"},{"location":"solvers/solvers/","page":"Linear System Solvers","title":"Linear System Solvers","text":"KrylovJL_CG(args...;kwargs...): A generic CG implementation\nKrylovJL_GMRES(args...;kwargs...): A generic GMRES implementation\nKrylovJL_BICGSTAB(args...;kwargs...): A generic BICGSTAB implementation\nKrylovJL_MINRES(args...;kwargs...): A generic MINRES implementation","category":"page"},{"location":"solvers/solvers/","page":"Linear System Solvers","title":"Linear System Solvers","text":"The general algorithm is:","category":"page"},{"location":"solvers/solvers/","page":"Linear System Solvers","title":"Linear System Solvers","text":"KrylovJL(args...; KrylovAlg = Krylov.gmres!,\n                  Pl=nothing, Pr=nothing,\n                  gmres_restart=0, window=0,\n                  kwargs...)","category":"page"},{"location":"basics/FAQ/#Frequently-Asked-Questions","page":"Frequently Asked Questions","title":"Frequently Asked Questions","text":"","category":"section"},{"location":"basics/FAQ/","page":"Frequently Asked Questions","title":"Frequently Asked Questions","text":"Ask more questions.","category":"page"},{"location":"basics/FAQ/#How-do-I-use-IterativeSolvers-solvers-with-a-weighted-tolerance-vector?","page":"Frequently Asked Questions","title":"How do I use IterativeSolvers solvers with a weighted tolerance vector?","text":"","category":"section"},{"location":"basics/FAQ/","page":"Frequently Asked Questions","title":"Frequently Asked Questions","text":"IterativeSolvers.jl computes the norm after the application of the left precondtioner Pl. Thus in order to use a vector tolerance weights, one can mathematically hack the system via the following formulation:","category":"page"},{"location":"basics/FAQ/","page":"Frequently Asked Questions","title":"Frequently Asked Questions","text":"Pl = LinearSolve.InvDiagonalPreconditioner(weights)\nPr = LinearSolve.DiagonalPreconditioner(weights)\n\nA = rand(n,n)\nb = rand(n)\n\nprob = LinearProblem(A,b)\nsol = solve(prob,IterativeSolvers_GMRES(),Pl=Pl,Pr=Pr)","category":"page"},{"location":"basics/FAQ/","page":"Frequently Asked Questions","title":"Frequently Asked Questions","text":"If you want to use a \"real\" preconditioner under the norm weights, then one can use ComposePreconditioner to apply the preconditioner after the application of the weights like as follows:","category":"page"},{"location":"basics/FAQ/","page":"Frequently Asked Questions","title":"Frequently Asked Questions","text":"Pl = ComposePreconitioner(LinearSolve.InvDiagonalPreconditioner(weights),realprec)\nPr = LinearSolve.DiagonalPreconditioner(weights)\n\nA = rand(n,n)\nb = rand(n)\n\nprob = LinearProblem(A,b)\nsol = solve(prob,IterativeSolvers_GMRES(),Pl=Pl,Pr=Pr)","category":"page"},{"location":"#LinearSolve.jl:-High-Performance-Unified-Nonlinear-Solvers","page":"Home","title":"LinearSolve.jl: High-Performance Unified Nonlinear Solvers","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"LinearSolve.jl is a unified interface for the linear solving packages of Julia. It interfaces with other packages of the Julia ecosystem to make it easy to test alternative solver packages and pass small types to control algorithm swapping. It also interfaces with the ModelingToolkit.jl world of symbolic modeling to allow for automatically generating high-performance code.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Performance is key: the current methods are made to be highly performant on scalar and statically sized small problems, with options for large-scale systems. If you run into any performance issues, please file an issue.","category":"page"},{"location":"#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"To install LinearSolve.jl, use the Julia package manager:","category":"page"},{"location":"","page":"Home","title":"Home","text":"using Pkg\nPkg.add(\"LinearSolve\")","category":"page"},{"location":"#Contributing","page":"Home","title":"Contributing","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Please refer to the SciML ColPrac: Contributor's Guide on Collaborative Practices for Community Packages for guidance on PRs, issues, and other matters relating to contributing to ModelingToolkit.\nThere are a few community forums:\nthe #diffeq-bridged channel in the Julia Slack\nJuliaDiffEq on Gitter\non the Julia Discourse forums (look for the modelingtoolkit tag\nsee also SciML Community page","category":"page"},{"location":"#Roadmap","page":"Home","title":"Roadmap","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Wrappers for every linear solver in the Julia language is on the roadmap. If there are any important ones that are missing that you would like to see added, please open an issue. The current algorithms should support automatic differentiation. Pre-defined preconditioners would be a welcome addition.","category":"page"},{"location":"tutorials/linear/#Solving-Linear-Systems-in-Julia","page":"Solving Linear Systems in Julia","title":"Solving Linear Systems in Julia","text":"","category":"section"},{"location":"tutorials/linear/","page":"Solving Linear Systems in Julia","title":"Solving Linear Systems in Julia","text":"A linear system Au=b is specified by defining an AbstractMatrix A, or by providing a matrix-free operator for performing A*x operations via the function A(u,p,t) out-of-place and A(du,u,p,t) for in-place. For the sake of simplicity, this tutorial will only showcase concrete matrices.","category":"page"},{"location":"tutorials/linear/","page":"Solving Linear Systems in Julia","title":"Solving Linear Systems in Julia","text":"The following defines a matrix and a LinearProblem which is subsequently solved by the default linear solver.","category":"page"},{"location":"tutorials/linear/","page":"Solving Linear Systems in Julia","title":"Solving Linear Systems in Julia","text":"using LinearSolve\n\nA = rand(4,4)\nb = rand(4)\nprob = LinearProblem(A, b)\nsol = solve(prob)\nsol.u\n\n#=\n4-element Vector{Float64}:\n  0.3784870087078603\n  0.07275749718047864\n  0.6612816064734302\n -0.10598367531463938\n=#","category":"page"},{"location":"tutorials/linear/","page":"Solving Linear Systems in Julia","title":"Solving Linear Systems in Julia","text":"Note that solve(prob) is equivalent to solve(prob,nothing) where nothing denotes the choice of the default linear solver. This is equivalent to the Julia built-in A\\b, where the solution is recovered via sol.u. The power of this package comes into play when changing the algorithms. For example, IterativeSolvers.jl has some nice methods like GMRES which can be faster in some cases. With LinearSolve.jl, there is one interface and changing linear solvers is simply the switch of the algorithm choice:","category":"page"},{"location":"tutorials/linear/","page":"Solving Linear Systems in Julia","title":"Solving Linear Systems in Julia","text":"sol = solve(prob,IterativeSolversJL_GMRES())\n\n#=\nu: 4-element Vector{Float64}:\n  0.37848700870786\n  0.07275749718047908\n  0.6612816064734302\n -0.10598367531463923\n=#","category":"page"},{"location":"tutorials/linear/","page":"Solving Linear Systems in Julia","title":"Solving Linear Systems in Julia","text":"Thus a package which uses LinearSolve.jl simply needs to allow the user to pass in an algorithm struct and all wrapped linear solvers are immediately available as tweaks to the general algorithm.","category":"page"},{"location":"tutorials/caching_interface/#Linear-Solve-with-Caching-Interface","page":"Linear Solve with Caching Interface","title":"Linear Solve with Caching Interface","text":"","category":"section"},{"location":"tutorials/caching_interface/","page":"Linear Solve with Caching Interface","title":"Linear Solve with Caching Interface","text":"In many cases one may want to cache information that is reused between different linear solves. For example, if one is going to perform:","category":"page"},{"location":"tutorials/caching_interface/","page":"Linear Solve with Caching Interface","title":"Linear Solve with Caching Interface","text":"A\\b1\nA\\b2","category":"page"},{"location":"tutorials/caching_interface/","page":"Linear Solve with Caching Interface","title":"Linear Solve with Caching Interface","text":"then it would be more efficient to LU-factorize one time and reuse the factorization:","category":"page"},{"location":"tutorials/caching_interface/","page":"Linear Solve with Caching Interface","title":"Linear Solve with Caching Interface","text":"lu!(A)\nA\\b1\nA\\b2","category":"page"},{"location":"tutorials/caching_interface/","page":"Linear Solve with Caching Interface","title":"Linear Solve with Caching Interface","text":"LinearSolve.jl's caching interface automates this process to use the most efficient means of solving and resolving linear systems. To do this with LinearSolve.jl, you simply init a cache, solve, replace b, and solve again. This looks like:","category":"page"},{"location":"tutorials/caching_interface/","page":"Linear Solve with Caching Interface","title":"Linear Solve with Caching Interface","text":"n = 4\nA = rand(n,n)\nb1 = rand(n); b2 = rand(n)\nprob = LinearProblem(A, b1)\n\nlinsolve = init(prob)\nsol1 = solve(linsolve)\n\nsol1.u\n#=\n4-element Vector{Float64}:\n -0.9247817429364165\n -0.0972021708185121\n  0.6839050402960025\n  1.8385599677530706\n=#\n\nlinsolve = LinearSolve.set_b(sol1.cache,b2)\nsol2 = solve(linsolve)\n\nsol2.u\n#=\n4-element Vector{Float64}:\n  1.0321556637762768\n  0.49724400693338083\n -1.1696540870182406\n -0.4998342686003478\n=#","category":"page"},{"location":"tutorials/caching_interface/","page":"Linear Solve with Caching Interface","title":"Linear Solve with Caching Interface","text":"Then refactorization will occur when a new A is given:","category":"page"},{"location":"tutorials/caching_interface/","page":"Linear Solve with Caching Interface","title":"Linear Solve with Caching Interface","text":"A2 = rand(n,n)\nlinsolve = LinearSolve.set_A(sol2.cache,A2)\nsol3 = solve(linsolve)\n\nsol3.u\n#=\n4-element Vector{Float64}:\n -6.793605395935224\n  2.8673042300837466\n  1.1665136934977371\n -0.4097250749016653\n=#","category":"page"},{"location":"tutorials/caching_interface/","page":"Linear Solve with Caching Interface","title":"Linear Solve with Caching Interface","text":"The factorization occurs on the first solve, and it stores the factorization in the cache. You can retrieve this cache via sol.cache, which is the same object as the init but updated to know not to re-solve the factorization.","category":"page"},{"location":"tutorials/caching_interface/","page":"Linear Solve with Caching Interface","title":"Linear Solve with Caching Interface","text":"The advantage of course with using LinearSolve.jl in this form is that it is efficient while being agnostic to the linear solver. One can easily swap in iterative solvers, sparse solvers, etc. and it will do all of the tricks like caching symbolic factorizations if the sparsity pattern is unchanged.","category":"page"}]
}
